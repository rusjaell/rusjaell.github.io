glfwMakeContextCurrent(window);
          
if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) 
{
    std::cout << "Failed to initialize GLAD" << std::endl;
    glfwTerminate();
    return -1;
}

while (!glfwWindowShouldClose(window))