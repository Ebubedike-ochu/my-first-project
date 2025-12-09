  interface UserGreetingProps {
    isLoggedIn: boolean;
    username: string;
 }
const UserGreeting: React.FC<UserGreetingProps> = (Props) => {
    return (
    <div> {Props.isLoggedIn ? <h2>welcome {Props.username}</h2> : <h2>You are not eligible, try again.</h2>} </div>
);

};
    
export default UserGreeting