const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = function() {

  const employeesArray = [];
  
  let addingEmployees = true;
  while (addingEmployees) {
    const firstName = prompt("Emter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salaryInput = prompt("Enter employee's salary:");
    const salary = parseFloat(salaryInput) || 0; 

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employeesArray.push(employee);

    const continueInput = prompt("Do you want to add another employee?");
    addingEmployees = continueInput === "yes";
  }
  return employeesArray;
};

const employees = collectEmployees();
console.log(employees);



const displayAverageSalary = function(employeesArray) {
  
  let totalSalary = 0;
  
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employeesArray.length} employees.`);

};

displayAverageSalary(employees);



const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulation ${randomEmployee.firstName} ${randomEmployee.lastName}! The winner of our random drawing!!`);
}

getRandomEmployee(employees);


const displayEmployees = function(employeesArray) {
  
  const employeeTable = document.querySelector('#employee-table');

  
  employeeTable.innerHTML = '';


  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

addEmployeesBtn.addEventListener('click', trackEmployeeData);
