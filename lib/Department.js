class Department {

    constructor(connection, id = 0, name = '') {
        this.connection = connection;
        this.id = id;
        this.name = name;
    }

    printDepartment() {
        this.connection.query(
            `SELECT department.id, department.name
             FROM department`,
             function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.table(res);
             }
        );
    }

    newDepartment(id = this.id, name = this.name) {
        this.connection.query(
            `INSERT INTO department (id, name)
             VALUES (?,?)`, [id, name],
             function (err, res) {
                 if (err) {
                     console.log(err);
                 }
             }
        );
    }
}