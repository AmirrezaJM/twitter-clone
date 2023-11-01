"use client";

import userLoginModal from "@/hooks/userLoginModal";
import { useCallback,useState } from "react";
import Modal from "./Modal";
import Input from "./Input";

const LoginModal = () => {
    const loginModal = userLoginModal();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            loginModal.onClose()
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    },[loginModal])
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={email}
                disabled={isLoading}
            />
        </div>
    )
    
    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Register"
            actionLabel="Sign out"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
}

export default LoginModal;