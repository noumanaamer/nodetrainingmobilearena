CREATE TABLE Mobile (
    id INTEGER PRIMARY KEY,
    title STRING,
    detail TEXT,
    public BOOLEAN,
    isprivate BOOLEAN,
    username STRING,
    FOREIGN KEY(username)
    REFERENCES User(username)
)

