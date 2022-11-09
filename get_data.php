
<?php
require 'bootstrap.php';
// table = accounts

echo json_encode($query->selectAll('accounts'));  // Pretvaranje u JSON array

?>