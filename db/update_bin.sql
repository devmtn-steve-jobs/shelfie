UPDATE bins
SET name = $3, price = $4, image_url = $5
WHERE bin_id = $1 AND shelf = $2;