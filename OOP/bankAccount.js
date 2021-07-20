class BankAccount {
    constructor(intRate = 0, balance = 0) { // don't forget to add some default values for these parameters!
    	// your code here! (remember, this is where we specify the attributes for our class)
	// don't worry about user info here; we'll involve the User class soon
        this.balance  = balance;
        this.intRate = intRate;

    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        if(amount<=this.balance){
            this.balance -= amount;
        }else{
            console.log('Withdraw amount exceeds account balance.')
        }
        return this;
    }
    displayAccountInfo() {
        console.log(`Account balance is ${this.balance}`)
    }
    yieldInterest() {
        if(this.balance>0){
            this.balance += this.balance*this.intRate;
        }else{
            console.log('Account balance is zero and negative.')
        }
        return this;
    }
}

const checkingAccount = new BankAccount(0.005,0);
const savingAccount = new BankAccount(0.02,0);

checkingAccount.deposit(1000).deposit(1500).deposit(2000).yieldInterest().displayAccountInfo();
savingAccount.deposit(5000).deposit(10000).withdraw(2000).withdraw(1500).withdraw(3000).withdraw(500).yieldInterest().displayAccountInfo();
