import { KontenbaseClient } from "@kontenbase/sdk"

export const kontenbase = new KontenbaseClient({
    apiKey: "2651dc6c-e792-4970-8f28-a039b6b5e6d3",
})
console.log(process.env.REACT_APP_KONTENBASE_API_KEY)