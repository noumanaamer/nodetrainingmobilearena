CREATE TABLE Views (
    mid INTEGER,
    username STRING,
    FOREIGN KEY (mid) REFERENCES Mobile(id),
    FOREIGN KEY (username) REFERENCES User(username)
)