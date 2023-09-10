console.log("Welcome to Deno!");

const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);

const filenames = Deno.args;
for (const filename of filenames) {
    const file = await Deno.open(filename);
    await file.readable.pipeTo(Deno.stdout.writable, {preventClose: true});
}

export {};
