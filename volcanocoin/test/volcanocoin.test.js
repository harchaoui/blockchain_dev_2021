const Vlc = artifacts.require('Volcanocoin');

contract('vlc', (accounts) => {
    let _vlc = null;
    let totalSupply = null;
    before(async ()=>{
    _vlc = await Vlc.deployed();
    totalSupply = await _vlc.getTotalSupply.call()

    });

        it('Volcanocoin Should be deployed properly',async ()=>{
            
        assert(_vlc.address !== '' );
        console.log(`volcanocoin lives @:${_vlc.address}`); 
        }
        );

        it('Volcanocoin should has 1000 in supply', async ()=>{

        assert.equal(totalSupply, 1000 , "Minting failled")
        });

        it('Increase function executed by the OWNER', async()=>{
            const owner = accounts[0]
            // const hacker = accounts[2]
            // increase the ts by the hacker
            console.log('hacker try to execute the contract')
            const rslt = await _vlc.increaseSupply.call({from: owner})
            console.log(rslt.toString())
            assert.equal(rslt.toString(), owner, 'your trying to access a restricted function')
        })

        it('Increase function executed a HACKER by the SC owner', async() => {
            const owner = accounts[0]
            const hacker = accounts[2]
            // increase the ts by the hacker
            console.log('hacker try to execute the contract')
            const rslt = await _vlc.increaseSupply.call({from: hacker})
            assert.equal(rslt.toString(), owner, 'your trying to access a restricted function')
        }
        );

});