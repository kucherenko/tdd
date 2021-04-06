export function splitter(str: string): string[] {
    return str.split(/,|\n/).filter((s) => s !== '');
}

export function convertor(strs: string[]): number[] {
    return strs.map((s) => parseInt(s))
}

export function summarize(nums: number[]): number {
    return nums.reduce((all, i) => all + i, 0)
}

export function calculator(str: string,
                           Splitter: any = splitter,
                           Convertor: any = convertor,
                           Validator: any = validator,
                           Summarize: any = summarize): number {
    return Summarize(Validator(Convertor(Splitter(str))));
}

export function validator(nums: number[]): number[] {
    return nums;
}
