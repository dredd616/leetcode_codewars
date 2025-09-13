// https://www.codewars.com/kata/582a53ed261c2af9d200018c

type ListItemType = {
    firstName: string, lastName: string, country: string, continent: string, age: number, language: string,
    username: string
}

const addUsername = (list:  ListItemType[]) => {
    return list.map(item => {
        const currentYear = new Date().getFullYear()

        item.username = item.firstName.toLowerCase() + item.lastName[0].toLowerCase() + (currentYear - item.age)

        return item
    })
}