const Vlc = artifacts.require('Volcanocoin');

contract('vlc', () => {
    let _vlc = null;
    before(async ()=>{
    _vlc = await Vlc.deployed();
    });

        it('Volcanocoin Should be deployed properly', async () => {
        assert(_vlc.address !== '' );
        console.log(`volcanocoin lives @:${_vlc.address}`); 
        });

        it('Volcanocoin should has 1000 in supply', async ()=> {
        const totalSupply = await _vlc.getTotalSupply.call();
        assert.equal(totalSupply, 1000 , "Minting failled")
    });
});