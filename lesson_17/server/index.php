<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.3.5/tailwind.min.css">
    <title>Chat App</title>
</head>

<body>
    <div id="app"> 
        <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">

            <div class="flex flex-col flex-auto h-full p-6">
                <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                        <div class="flex flex-col h-full">
                            <div data-id="chat" class="grid grid-cols-12 gap-y-2">
                              
                      <?php  include "./tmpl/chat.tmpl.php" ?>
                            </div>
                        </div>
                    </div>
                    <?php  include "./tmpl/button.tmpl.php" ?>
                </div>
            </div>
        </div>
    </div>
    </div>
    
   

</body>

</html>
