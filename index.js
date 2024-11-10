// Account object with required properties and methods
const account = {
    accountName: "Blaise Sindjui", // Name of the account holder
    balance: 1000, // Initial balance

    // Display balance
    getBalance: function() {
        console.log(`Current Balance: $${this.balance}`);
    },

    // Deposit money
    deposit: function(amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError("Invalid deposit amount.");
            return;
        }
        this.balance += amount;
        console.log(`$${amount} deposited successfully.`);
        this.getBalance();
    },

    // Withdraw money
    withdrawal: function(amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError("Invalid withdrawal amount.");
            return;
        }
        if (amount > this.balance) {
            this.accountError("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`$${amount} withdrawn successfully.`);
        this.getBalance();
    },

    // Display account holder's name
    getAccountName: function() {
        console.log(`Account Holder: ${this.accountName}`);
    },

    // Handle errors
    accountError: function(message) {
        console.log(`Error: ${message}`);
    },

    // Exit the account
    exitAccount: function() {
        console.log("Exiting account. Goodbye!");
    }
};

// The ATM function to handle user actions
function atm() {
    const message = parseFloat(prompt("Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));

    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
            account.deposit(depositAmount);
            break;
        case 3:
            const withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
            account.withdrawal(withdrawalAmount);
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.exitAccount();
            break;
        default:
            account.accountError("Invalid choice, please select a valid option.");
    }
}

// Run the ATM function
atm();
