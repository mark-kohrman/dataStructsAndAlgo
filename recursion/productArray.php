<?php
function productOfArra($array)
{
  print_r($array);

  $i = count($array) - 1;
  print_r($i);

  if ($i = -1) {
    return 1;
  }
  $returnValue = array_pop($array) * productOfArra($array);
  return $returnValue;
}
productOfArra([1, 2, 3, 4, 5]);
