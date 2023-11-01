"use client";

import { useCallback,useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import userRegisterModal from "@/hooks/userRegisterModal";
import LoginModal from "./LoginModal";

const RegisterModal = () => {
    const registerModal = userRegisterModal();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            registerModal.onClose()
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[RegisterModal])
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={email}
                disabled={isLoading}
            />
        </div>
    );

    
    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
}

export default RegisterModal;