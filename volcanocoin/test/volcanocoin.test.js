const Vlc = artifacts.require('Volcanocoin');

contract('vlc', () => {
    
    it('Volcanocoin Should be deployed properly', async () => {
        const _vlc =  await Vlc.deployed();
        console.log(_vlc.address); 
        assert(_vlc.address !== '');
    });
});