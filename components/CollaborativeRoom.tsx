'use client'

import Header from "@/components/Header"
import { Editor } from "@/components/editor/Editor"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'

function CollaborativeRoom({ children }: { children: React.ReactNode }) {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
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
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom