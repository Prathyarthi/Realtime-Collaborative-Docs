import Header from "@/components/Header"
import { Editor } from "@/components/editor/Editor"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

function Document() {
    return (
        <div>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document-title">Document</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
        </div>
    )
}

export default Document