UPDATE bins
SET name = $2, price = $3, image_url = $4
WHERE bin_id = $1;