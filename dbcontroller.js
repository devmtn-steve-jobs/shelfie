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
        let dbInstance = req.app.get('db');

        dbInstance.read_bins().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => res.status(500).send(shelves))
    },
    getBin: (req, res, next) => {
        let dbInstance = req.app.get('db');

        dbInstance.read_bin().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => res.status(500).send(shelves))
    },
    updateBin: (req, res, next) => {
        let dbInstance = req.app.get('db');

        dbInstance.update_bin().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => res.status(500).send(shelves))
    },
    deleteBin: (req, res, next) => {
        let dbInstance = req.app.get('db');

        dbInstance.delete_bin().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => res.status(500).send(shelves))
    },
    createBin: (req, res, next) => {
        let dbInstance = req.app.get('db');

        dbInstance.create_bin().then(shelves => {
            res.status(200).send(shelves)
        }).catch(err => res.status(500).send(shelves))
    }
}