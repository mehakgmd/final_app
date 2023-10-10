"use client"
import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducer";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { ne } from "drizzle-orm";

export const cartContext = createContext<any>(null);

interface indexForError {
    [key: string]: string
};


const ContextWrapper = ({ children }: { children: ReactNode }) => {
    let router = useRouter();
    const [userData, setUserData] = useState<any>();
    const [errorViaUserCredential, setErrorViaUserCredential] = useState<indexForError | "">("")
    const [loading, setLoading] = useState(false);
    const [cartArray, setCartArray] = useState<any>([]);
    const [errorsOfFirebase, setErrorsOfFirebase] = useState({
        key: "",
        errorMessage: "",
    });
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (cartArray&&cartArray.length !== 0) {
            setQuantity(cartArray.length);
        }
    }, [cartArray])


async  function fetchApiForAllCartItems(){
let res = await fetch(`${BASE_PATH_FORAPI}/api/cart`);
if(!res.ok){
    throw new Error("Failed to fetch")
}
let dataToreturn = await res.json()
 await setCartArray((prev: any) => dataToreturn.allCartData);
}

useEffect(()=> {
    fetchApiForAllCartItems()
}, [])



async function dispatch(payload:string,data:any) {
   console.log("func running add to cart")
    if(payload === "addToCart"){
     await   fetch(`${BASE_PATH_FORAPI}/api/cart`,
       { 
        method: "POST",
        body: JSON.stringify(data)
    })
    }else if(payload === "removeFromCart"){
    console.log("func running remove cart")
 let dataa = await fetch(`${BASE_PATH_FORAPI}/api/cart?product_id=${data.product_id}&user_id=${data.user_id}`,{ 
        method: "DELETE",
    })
    let NotData = await dataa.json();
    }else if(payload === "updateCart"){
        setLoading(true);
     let dataa = await fetch(`${BASE_PATH_FORAPI}/api/cart`,{ 
            method: "PUT",
            body: JSON.stringify(data)
        })
        let NotData = await dataa.json();
        console.log("func running update cart", NotData)
        setLoading(false)
        }
   fetchApiForAllCartItems(); 
}



   
















    let user = auth.currentUser;

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUserData({
                    displayName: user.displayName,
                    email: user.email,
                    uuid: user.uid,
                    photoUrl: user.photoURL,
                    emailVerified: user.emailVerified
                })
            } else {
                setUserData(null);
            }
        });
    }, [])


    let provider = new GoogleAuthProvider();

    function signUpViaGoogle() {
        setLoading(true)
        return signInWithPopup(auth, provider).then((userData: any) => {
            if (userData) {
                setUserData({
                    displayName: userData.user.displayName,
                    email: userData.user.email,
                    uuid: userData.user.uid,
                    photoUrl: userData.user.photoURL,
                    emailVerified: userData.user.emailVerified
                });
                router.push("/")
            }
            setLoading(false)
        })
    }


    function signUpUser(email: string, password: string) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((res: any) => {
            setLoading(false);
            router.push("/");
        }).catch((res: any) => {
            let error = res.code.split("/")
            error = error[error.length - 1];
            setErrorsOfFirebase({
                key: "signup",
                errorMessage: error
            })
            setLoading(false);
        });
        setLoading(false);
    };

    function signInUser(email: string, password: string) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password).then((res: any) => {
            setLoading(false);
        }).catch((res: any) => {
            let error = res.code.split("/")
            error = error[error.length - 1];
            setErrorsOfFirebase({
                key: "signin",
                errorMessage: error
            })
        });
        setLoading(false);
    }

    function LogOut() {
        setLoading(true);
        signOut(auth);
        setLoading(false);
        window.location.reload();
    };

    function sendEmailVerificationCode() {
        setLoading(true);
        if (user) {
            sendEmailVerification(user).then((res: any) => {
                console.log("sended");
                window.location.href = "/"
            })
            setLoading(false);
        }
    }


    function updateUserNamePhoto(userName: string, photoURL?: string) {
        setLoading(true);
        if (user) {
            updateProfile(user, {
                displayName: userName, photoURL: "https://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Name-icon.png"
            }).then(() => {
                setLoading(false);
                window.location.reload();
            }).catch((error: any) => {
                setLoading(false);
                console.log(error)
            });
        }
    }

    return (
        <cartContext.Provider value={{
            cartArray,
            errorsOfFirebase,
            dispatch,
            updateUserNamePhoto,
            userData,
            sendEmailVerificationCode,
            signUpUser,
            signUpViaGoogle,
            signInUser,
            LogOut,
            loading,
            quantity,
            setQuantity,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextWrapper