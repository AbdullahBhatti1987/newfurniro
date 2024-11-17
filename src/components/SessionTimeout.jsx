function SessionTimeout() {
  const logoutTimer = useRef(null); // Using useRef to persist the timeout across renders

  useEffect(() => {
    // Function to set the logout timer
    const startTimer = () => {
      logoutTimer.current = setTimeout(() => {
        HandleSignOut(); // Log out after the timeout
      }, 60000); // Set timeout for 1 minute (60000 ms)
    };

    // Reset the logout timer when there's user activity
    const resetTimeout = () => {
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current); // Clear the existing timeout
      }
      startTimer(); // Start a new timeout
    };

    // Start the initial timer
    startTimer();

    // Add event listeners to reset the timer on activity
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    // Cleanup on unmount
    return () => {
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current); // Clean up the timeout
      }
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return null;
}

export default SessionTimeout;