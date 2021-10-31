INSERT INTO department (name)
VALUES
('Human Resources'),
('Accounting'),
('Customer Service'),
('IT'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Case Handler', 100000.00, 1),
('Book-Cooker', 150000.00, 2),
('Complaint Handler', 070000.00, 3),
('Database Management', 130000.00, 4),
('Lawyer', 200000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES
('James', 'Lindsey', 4, 4),
('Tom', 'Delonge', 1, 1),
('Mark', 'Hoppus', 5, 5),
('Will', 'Toledo', 4, 4),
('Tyson', 'Ritter', 1, 1),
('Brian', 'Sella', 3, 3);