function counter (value = 0) {

    const data = {
        increase: 0,
        decrease: 0,
        get: 0,
        getStatistic: 0,
    }


    const obj = {
        increase (num = 0) {
            data.increase++;
            return value += num;
        },
        decrease (num = 0) {
            data.decrease++;
            return value -= num;
        },
        get () {
            data.get++;
            return value;
        },
        getStatistic () {
            data.getStatistic++;
            return data;
        },
        nullify () {
            for (let i in data) {
                data[i] = 0;
            }
            return data;
        }
    }
    return obj;
}

let method = counter();

console.log(method.get());
console.log(method.increase(25));
console.log(method.decrease(15));
console.log(method.decrease(5));
console.log(method.getStatistic());
console.log(method.nullify());
