class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.balance = 0;
    }
    makeDeposit(amount){
        this.balance += amount;
        return this;
    }
    makeWithdrawal(amount){
        if(amount<=this.balance){
            this.balance -= amount;
        }else{
            console.log(`${amount} exceeds balance in account.`)
        }
        return this;
    }
    displayBalance(){
        console.log(`${this.username} has balance of ${this.balance} in account.`)
        return this;
    }
    transferMoney(otherUser, amount){
        if(amount<=this.balance){
            this.balance -= amount;
            otherUser.makeDeposit(amount);
            console.log(`${amount} has been transferred from ${this.username} to ${otherUser.username} successfully`)
        }else{
            console.log(`Money can't be transferred from ${this.username} to ${otherUser.username}`)
        }
        return this;
    }
}

const user1 = new User('johnSmith', 'js@gmail.com');
const user2 = new User('johnDole', 'jd@gmail.com');
const user3 = new User('johnKay', 'jk@gmail.com');

user1.makeDeposit(100).makeDeposit(1000).makeDeposit(2500).makeWithdrawal(800).displayBalance();
user2.makeDeposit(500).makeDeposit(3000).makeWithdrawal(500).displayBalance();
user3.makeDeposit(1000).makeWithdrawal(200).makeWithdrawal(500).displayBalance();
user1.transferMoney(user3,500).displayBalance();
user3.displayBalance();