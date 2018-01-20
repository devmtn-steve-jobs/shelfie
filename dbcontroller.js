/**
 * Created by Porter on 1/17/2018.
 //  */

// -- DB FIELDS --
// bin_id
// shelf
// name
// price
// image_url

module.exports = {
    getBins: (req, res, next) => {
        // Returns an array of bin objects. If there is no bin, returns null.
        //     Example: [ {}, {}, null, null, {} ].
        // :id is the shelf id. Which can be 'A', 'B', 'C', or 'D'.
        let dbInstance = req.app.get('db');
        let {id} = req.params; //shelf id
        dbInstance.read_bins([id]).then(bins => {
            console.log(bins)
            let output = [null, null, null, null, null];
            if (bins.length) {
                for (var i = 0; i < 5; i++) {
                    if (bins[i]) {
                        output[bins[i].bin_id - 1] = bins[i];
                    }
                }
                res.status(200).send(output)
            }
            else {
                res.status(200).send(output)
            }
        }).catch(err => res.status(500).send(err))
    },
    getBin: (req, res, next) => {
        // Returns a bin object. If there is no bin, returns null.
        // :id is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
        let dbInstance = req.app.get('db');
        let {id} = req.params; //bin id
        let shelf = id[0];
        let bin = id[1];
        console.log(shelf, bin)
        dbInstance.read_bin([shelf, bin]).then(bin => {
            res.status(200).send(bin)
        }).catch(err => res.status(500).send(err))
    },
    updateBin: (req, res, next) => {
        // Updates and returns a bin object.
        //     This endpoint should only be accessible if there is a bin object.
        // :id is the shelf and bin id combined. Examples: 'A5', 'B1', 'C3'.
        let dbInstance = req.app.get('db');
        let {id} = req.params; //bin id
        let {name, price, url} = req.body;
        console.log(name, price, url)
        price = Number(price);
        let shelf = id[0];
        let bin = id[1];
        dbInstance.read_bin([shelf, bin]).then(oldBin => {
            console.log("bin");
            if (oldBin.length) {
                console.log("bin exists");
                console.log(bin, shelf, name, price, url);
                dbInstance.update_bin([bin, shelf, name, price, url])
                    .then(() => {
                        console.log("updated bin");
                        dbInstance.read_bin([shelf, bin])
                            .then(newBin => res.status(200).send(newBin))
                            .catch(err => res.status(500).send(err));
                    })
                    .catch(err => res.status(500).send(err))
            }
            else {
                res.status(404).send("Bin doesnt exist")
            }
        }).catch(err => res.status(500).send(err));

    },
    deleteBin: (req, res, next) => {
        // Deletes a bin object. Returns nothing.
        // :id is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
        let dbInstance = req.app.get('db');
        let {id} = req.params; //shelf and bin id combined
        let shelf = id[0];
        let bin = id[1];
        dbInstance.delete_bin([bin, shelf]).then(() => {
            res.status(200).send()
        }).catch(err => res.status(500).send())
    },
    createBin: (req, res, next) => {
        // Creates a new bin object. Returns nothing.
        //     This endpoint should only be accessible if there is not a bin object already.
        // :id is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
        let dbInstance = req.app.get('db');
        let {id} = req.params; //shelf and bin id combined
        let shelf = id[0];
        let bin = Number(id[1]);
        let {name, price, url} = req.body;
        price = Number(price);

        console.log(shelf, bin, name, price, url)

        dbInstance.read_bin([shelf, bin]).then(result => {
            console.log("bin");
            console.log(result)
            if (!result.length) {
                console.log("good to go")
                dbInstance.create_bin([bin, shelf, name, price, url]).then(() => {
                    res.status(200).send()
                }).catch(err => res.status(500).send(err))
            }
            else {
                res.status(404).send("bin already exists")
            }
        })


    }
}