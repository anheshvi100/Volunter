using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Volunter.Startup))]
namespace Volunter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
