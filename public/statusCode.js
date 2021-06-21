 const statusCode = {
    100:'continue=> tudo ocorreu bem até agora  continue com a requisição ou ignore se já concluiu o que gostaria',
    101:'Siwtching=>Protocol=>Servidor alterado',
    102:'Processing=>Nenhuma resposta disponivel ainda',
    103:'Early Hinst=>Recarregue a página enquanto o servidor envia uma resposta',
    
    200:'Ok=> Requisição bem sucedida',
    201:'Created=>A requisição foi bem sucedida e um novo recurso foi criado',
    202:'Accepted=>A requisição foi recebida mas nenhuma ação foi tomada sobre ela',
    203:'Non-Authoritative Information=>Dados copiados de outro lugar',
    204:'No Content=> Não há conteúdo para ser enviado',
    205:'Reset Content=> Reconfigure a visualização do conteúdo',
    206:'Partial Content=> Separe o download em vários fluxos',
    207:'Multi-Status=>vários códigos de status podem ser apropriados',
    208:'Mult-Status=>evite enumerar os membros internos de várias ligações à mesma coleção repetidamente.',
    226:`Im used=>O servidor cumpriu uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.`,

    300:`Multiple Choice => A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.`,
    301:`Moved Permanently=> Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.`,
    302:`Found=>A URI foi mudada temporiariamente`,
    303:`See Other=>O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.`,
    304:`Not modified=>Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.`,
    305:`Use Proxy=>Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy.`,
   
    306:`Unused=>Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.`,
    307:`Temporary Redirect=>O servidor mandou essa resposta direcionando o cliente a buscar o recurso requisitado em outra URI com o mesmo método que foi utilizado na requisição original.`,
    308:`Permanente Redirect=>este recursos esta permanentemente em outra URI`,

    400:`Bad Request=>Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.`,
    402:`Unauthorized=>Deve se autenticar`,
    403:`Forbidden=>O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.`,
    404:`Not found=>O servidor não pode encontrar o recurso solicitado.`,
    405:`Method Not Allowed=>O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro.`,
    406:`Not Acceptable =>não encontrou nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.`,
    407:`Proxy Authentication Required=> é necessário que a autenticação seja feita por um proxy.`,

    500:`Internal Server Error=>O servidor encontrou uma situação com a qual não sabe lidar.`,
    501:`Not Implemented=>O método da requisição não é suportado pelo servidor e não pode ser manipulado`,
    502:`Bad Gateway=>obteve uma resposta inválida.`,
    503:'Service Unavailable=>O servidor não está pronto para manipular a requisição',
    504:`Gateway Timeout=>Não obteve uma resposta a tempo`,
    505:`HTTP Version Not Supported==>A versão HTTP usada na requisição não é suportada pelo servidor.`
}

export default statusCode