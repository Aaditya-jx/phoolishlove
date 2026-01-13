# How to Fix the "Failed to Fetch" Login Error

The "failed to fetch" error you're seeing during login is most likely because the backend server is not running. Here's how to fix it:

1.  **Open a new terminal or command prompt.**
2.  **Navigate to the `server` directory of the project:**
    ```bash
    cd path/to/your/project/server
    ```
3.  **Install the dependencies (if you haven't already):**
    ```bash
    npm install
    ```
4.  **Start the server:**
    ```bash
    npm start
    ```

You should see a message in the terminal that says "Server running on port 5000". Once the server is running, try logging in again.

If you still see the "failed to fetch" error after starting the server, there might be other issues. Here are a few things to check:

*   **Firewall:** Make sure your firewall is not blocking connections to port 5000.
*   **Console Errors:** Open the developer console in your browser (usually by pressing F12) and look for any error messages in the "Console" tab. These errors can provide more information about the problem.

If you've tried these steps and are still having trouble, please let me know.
