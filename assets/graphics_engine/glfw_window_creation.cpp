GLFWwindow* window = glfwCreateWindow(1280, 720, "Graphics Engine", nullptr, nullptr);
if (window == nullptr)
{
    std::cout << "Failed to Create Window" << std::endl;
    return -1;
}