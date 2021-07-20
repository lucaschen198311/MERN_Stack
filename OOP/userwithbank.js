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

class User{
    constructor(username, email, intRate=0, balance=0){
        this.username = username;
        this.email = email;
        this.account = new BankAccount(intRate, balance);
    }
    makeDeposit(amount){
        this.account.deposit(amount);
        return this;
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this;
    }
    displayBalance(){
        this.account.displayAccountInfo()
        return this;
    }
    transferMoney(otherUser, amount){
        if(amount<=this.account.balance){
            this.account.withdraw(amount)
            otherUser.account.deposit(amount);
            console.log(`${amount} has been transferred from ${this.username} to ${otherUser.username} successfully`)
        }else{
            console.log(`Money can't be transferred from ${this.username} to ${otherUser.username}`)
        }
        return this;
    }
}

const user1 = new User('johnSmith', 'js@gmail.com', 0.02, 0);
const user2 = new User('johnDole', 'jd@gmail.com', 0.015, 0);

user1.makeDeposit(2000).makeDeposit(1000).makeWithdrawal(800).transferMoney(user2,500).displayBalance();
user2.makeDeposit(1000).makeDeposit(1200).makeWithdrawal(800).displayBalance();