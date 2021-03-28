async function toto()
{
    return await Promise.resolve('toto is toto!');
}

class Util {
    static id = Date.now();
}

console.log('Util.id', Util.id);
 
toto().then(console.log);