"use client";

// Part 5: landing page starts
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  return (
    // Display some of the user's information
    <main>
        { !user ? (
          // Sign in to Firebase with GitHub authentication
          <button onClick={async () => { await gitHubSignIn(); }}>Sign In with GitHub</button>
        ) : (
          // Sign out of Firebase
          <>
            <button onClick={async () => { await firebaseSignOut(); }}>Sign Out</button>
            <p>Welcome, {user?.displayName || user?.email || "User"}</p>
          </>
        )}
    </main>
    // Part 5: landing page ends
  );
}