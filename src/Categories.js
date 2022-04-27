import React, { Component, useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function Categories(props) {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);
    const storage = getStorage();
    // const storageRef = ref(storage, path);

    function setImage(e) {
        setFile(e.target.files[0]);
    }

    async function upload() {
        const storageRef = ref(storage, `${user.uid}/${props.name}/${Date.now() + ""}`)
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log("Uploaded a blob or file!");
            retrieve();
        })
    }

    useEffect(() => {
        retrieve();
    }, [user]);

    function retrieve() {
        if (user != null) {
            const listRef = ref(storage, `${user.uid}/${props.name}`);
            setImages([]);
            listAll(listRef)
                .then((res) => {
                    res.items.forEach((itemRef) => {
                        const itemPath = itemRef._location.path_;
                        const urlRef = ref(storage, itemPath);
                        getDownloadURL(urlRef).then((url) => {
                            setImages(oldFiles => [...oldFiles, url]);
                        })
                    });
                }).catch((error) => {
                    console.log("Could not get items");
                })
        }

    }

    function deleteFiles(file) {
        let pictureRef = ref(storage, file); 
        deleteObject(pictureRef).then(() => {
                const newImages = images.filter((image) => image !== file);
                setImages(newImages);
            }).catch((error) => {
                console.log(error);
            })
        };
    
    return (
        <div>
            <div className='pb-1 pt-1 flex flex-col justify-center items-center mb-10 space-y-7'>
                <p className='pb-3 pt-10 flex text-4xl font-bold'>{props.name}</p>
                <form>
                    <input type='file' onChange={setImage}/>
                    <button type='button' onClick={upload}>Upload</button>
                </form>
            </div>   
            <div className='content-center grid grid-cols-4 gap-12 place-content-center px-36'>
                    {
                        images.map(file => (
                            (
                                <div className='group relative'>
                                    <img className='w-68 h-68' src={file} alt='' />
                                    <button onClick={() => deleteFiles(file)} className="font-bold z-10 absolute right-2 text-red-500 text-4xl font-base hidden group-hover:block">x</button>
                                </div>
                            )
                        ))
                    }
            </div>
        </div>
    );
}

export default Categories