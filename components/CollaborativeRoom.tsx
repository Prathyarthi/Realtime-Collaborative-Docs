'use client'

import Header from "@/components/Header"
import { Editor } from "@/components/editor/Editor"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import ActiveCollaborators from "./ActiveCollaborators"

function CollaborativeRoom({ roomId, roomMetadata }: CollaborativeRoomProps) {
    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
                    <Header>
                        <div className="flex w-fit items-center justify-center gap-2">
                            <p className="document-title">Document</p>
                        </div>
                        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                            <ActiveCollaborators />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom