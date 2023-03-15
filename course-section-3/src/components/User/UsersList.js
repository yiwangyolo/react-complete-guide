import { Card } from "../UI/Card";

import classes from "./UsersList.module.css";

export const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={classes.users}>
        <ul>
          <li>No user found.</li>
        </ul>
      </Card>
    );
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
