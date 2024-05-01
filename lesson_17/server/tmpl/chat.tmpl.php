<?php

$messages  = array(
        array('id' => 1 , 'id_user' => 100 , 'name'  => 'VG', 'message' => 'Привет как дела?' ),
        array('id' => 1 , 'id_user' => 100 , 'name'  => 'NG', 'message' => 'норм' ),
        array('id' => 1 , 'id_user' => 100 , 'name'  => 'VG', 'message' => 'ет как дела?' ),
);
?>
<?php foreach ($messages as $item): ?>
<?php if ($item['id_user'] == 100 ): ?>
<div class="col-start-1 col-end-8 p-3 rounded-lg">
    <div class="flex flex-row items-center">
        <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                <?php echo $item['name'] ?> 
        </div>
        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <?php echo $item['message'] ?> 
        </div>
    </div>
</div>
<?php else: ?>
<div class="col-start-6 col-end-13 p-3 rounded-lg">
    <div class="flex items-center justify-start flex-row-reverse">
        <div
            class="flex items-center justify-center h-10 w-10 rounded-full bg-red-500 flex-shrink-0">
                <?php echo $item['name'] ?> 
        </div>
        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <?php echo $item['message'] ?> 
        </div>
    </div>
</div>
<?php endif; ?>
<?php endforeach; ?>