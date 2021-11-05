class Employee {

    constructor(connection, id = 0, first_name = '', last_name = '', role = '', manager = '') {
        this.connection = connection;
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role = role;
        this.manager = manager;
    }

    printEmployees() {
        this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, employee.role, employee.manager
             FROM employee`,
             function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.table(res);
             }
        );
    }

    newEmployee(id = this.id, first_name = this.first_name, last_name = this.last_name, role = this.role, manager = this.manager) {
        this.connection.query(
            `INSERT INTO employee (id, first_name, last_name, role, manager)
             VALUES (?,?,?,?,?)`, [id, first_name, last_name, role, manager],
             function (err, res) {
                 if (err) {
                     console.log(err);
                 }
             }
        );
    }
}