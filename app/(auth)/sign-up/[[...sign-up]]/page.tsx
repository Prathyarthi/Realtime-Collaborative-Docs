import { SignUp } from "@clerk/nextjs"

function page() {
    return (
        <main className="auth-page">
            <SignUp />
        </main>
    )
}

export default page