# Set the target folder path
$folderPath = "D:\src\rolety\galeria\img\tmp"

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath -File

# Set the starting number
$number = 89

# Iterate over each file and rename it
foreach ($file in $files) {
    # Construct the new file name
    $newName = "$number.jpg"
    $newPath = Join-Path -Path $folderPath -ChildPath $newName

    # Check if a file with the new name already exists to prevent overwriting
    if (Test-Path $newPath) {
        Write-Host "Skipping $($file.Name) as $newName already exists."
    } else {
        # Rename the file
        Rename-Item -Path $file.FullName -NewName $newName
        Write-Host "Renamed $($file.Name) to $newName"
    }

    # Increment the number
    $number++
}
