const Vlc = artifacts.require('Volcanocoin');

contract('vlc', () => {

    it('Volcanocoin Should be deployed properly', async () => {
        const _vlc =  await Vlc.deployed();
        
        assert(_vlc.address !== '' );

        console.log(`volcanocoin lives @:${_vlc.address}`); 
    
    });

    it('Volcanocoin should has 1000 in supply', async ()=> {
        const _vlc = await Vlc.deployed()
        const totalSupply = await _vlc.getTotalSupply.call();
        assert.equal(totalSupply, 1000 , "Minting failled")
    }
    );  
});