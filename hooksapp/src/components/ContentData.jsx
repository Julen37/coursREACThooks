import { UserContext } from "./MyContext"

const ContentData = () => {
  return (
    // <UserContext.Consumer>
    //     {
    //        user => {
    //         console.log(user)
    //        } 
    //     }
    // </UserContext.Consumer>
    <UserContext.Consumer>
        { 
            user => {
                return (
                    <div>
                        <ul>
                            <li>Nom : {user.name}</li>
                            <li>Age : {user.age}</li>
                        </ul>
                    </div>
                )
            }
        }
    </UserContext.Consumer>
  )
}

export default ContentData
