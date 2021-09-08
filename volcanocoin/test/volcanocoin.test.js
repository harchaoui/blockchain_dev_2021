const Vlc = artifacts.require('Volcanocoin');

contract('vlc', (accounts) => {
    let _vlc = null;
    let totalSupply = null;
    let owner = null;
    // let 
    before( async ()=>{
    _vlc = await Vlc.deployed();
    totalSupply = await _vlc.getTotalSupply.call()
    // owner = await _vlc.getOwner.call();
    
    console.log(`initial values: { add:${_vlc.address}, total supply:${totalSupply}, owner:${owner} }`);

    });

        it('Volcanocoin Should be deployed properly',async ()=>{
            
        assert(_vlc.address !== '' );
        console.log(`volcanocoin lives @:${_vlc.address}`); 
        }
        );

        it('Volcanocoin should has 1000 in supply', async ()=>{

        assert.equal(totalSupply, 1000 , "Minting failled")
        });

        it('Increase function should be executed by the OWNER only', async()=>{
            const owner = accounts[0]
            // const hacker = accounts[2]
            // increase the ts by the hacker
            // console.log('OWENER try to execute ')
            const rslt = await _vlc.increaseSupply({from: owner})
            // console.log(rslt.toString())
            // assert.equal(rslt.toString(), owner, 'OWNER successfuly executed the increaseTotal ')
            assert.equal(rslt.toString(), owner, 'OWNER successfuly executed the increaseTotal ')
        });

        it('Increase function should not be executed by a HACKER', async() => {
            // const owner = accounts[0]
            const hacker = accounts[2]
            // increase the ts by the hacker
            // console.log('HACKER try to execute the contract')
            const rslt = await _vlc.increaseSupply({from: hacker})
            assert.equal(rslt.toString(), hacker, 'your trying to access a restricted function')
        }
        );

        // it('should get the balance of 1000 from the owner address', async ()=>{
        //     const owner = accounts[0];
        //     const owner_balance = await _vlc.getBalance.call(owner)

        //     console.log(`get balance of the address owner=${owner} which is balance=${owner_balance}`)

        //     // assert.equal(owner_balance, web3.utils.toBN(1000), 'balance is diff from 1000')
        // });


});