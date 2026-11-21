export const env = (name, fallback) => {
    const v = process.env[name] ?? fallback;
    if (v === undefined) throw new Error(`Missing env var ${name}`);
    return v;
};