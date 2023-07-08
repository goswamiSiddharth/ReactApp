import "./styles.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";
import AlignVerticalTopIcon from "@mui/icons-material/AlignVerticalTop";
import CategoryIcon from "@mui/icons-material/Category";
import NotesIcon from "@mui/icons-material/Notes";
import { Card, CardContent } from "@mui/material";
const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, user, title, category, notes } = curUser;

        return (
          <div className="UserData">
            <div className="id">
              <PermIdentityIcon /> ID
              <div style={{ "font-size": "15px", color: "firebrick" }}>
                {id}
              </div>
            </div>
            <hr></hr>
            <div className="ser">
              <div>
                <PersonIcon /> User
              </div>
              <div style={{ "font-size": "15px", color: "firebrick" }}>
                {user}
              </div>
            </div>
            <hr></hr>
            <div className="title">
              <div>
                <AlignVerticalTopIcon /> Title
              </div>
              <div style={{ "font-size": "15px", color: "firebrick" }}>
                {title}
              </div>
            </div>
            <hr></hr>
            <div className="categ">
              <div>
                <CategoryIcon /> Category
              </div>
              <div style={{ "font-size": "15px", color: "firebrick" }}>
                {category}
              </div>
            </div>
            <hr></hr>
            <div className="notes">
              <Card raised={true}>
                <CardContent style={{ "background-color": "lightblue" }}>
                  <div
                    style={{
                      "background-color": "lightblue",
                      color: "darkblue"
                    }}
                  >
                    <NotesIcon /> Notes
                  </div>
                  <div
                    style={{
                      "font-size": "13px",
                      "background-color": "lightblue",
                      color: "firebrick"
                    }}
                  >
                    {notes}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UserData;