CREATE TABLE Has (
    mid INTEGER,
    cid INTEGER,
    FOREIGN KEY (mid) REFERENCES Mobile(id),
    FOREIGN KEY (cid) REFERENCES Category(id)
)