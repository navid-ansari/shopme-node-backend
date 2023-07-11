import { NextFunction, Request, Response } from "express";

import { log } from "../../logger";
//import { mockRequest, mockResponse } from "../../types/test/mock-request";
import { getMenu } from "./menu.service";

const MenuSchema = require("../../schema/menu/MenuSchema");

jest.mock("./menu.service");

const Menu = [
  {
    _id: "6217dfbc071dd40058ac96f1",
    menuId: 1001,
    menuName: "HOME",
    menuLabel: "Home",
    childMenu: [],
    menuPath: "/",
  },
  {
    _id: "6217e04f071dd40058ac96f2",
    menuId: 1002,
    menuName: "SIGNIN",
    menuLabel: "Sign In",
    childMenu: [],
    menuPath: "/sign-in",
  },
];

describe("Navigation menu ajax call", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should return navigation menus with status 200", async () => {
    
    
    //expect(getMenu).toHaveBeenCalledTimes(1);
    const expectedResponse = {
      success: true,
      data: Menu,
      message: "Menu List.",
    };

    const mockRequest:Partial<Request> = {
      body: {},
      headers: {},
      params: {},
      query: {},
    };
    const mockResponse: Partial<Response> = {
      status: jest.fn().mockName('status fn').mockImplementation(() => Promise.resolve({status: 200})),
      json: jest.fn().mockName('json fn').mockReturnValueOnce(expectedResponse)
    };
    const result = await getMenu(mockRequest as Request, mockResponse as Response);
    console.log(result)
    expect(result).toHaveBeenCalledWith(200);
    //expect(mockResponse.status).toHaveBeenCalledTimes(1);
    /*expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);*/

    //await getMenu(mockRequest as Request, mockResponse as Response);
    //expect(getMenu).toBeCalled();
    //expect(getMenu).toHaveBeenCalledTimes(1);

    /*MenuSchema.find = await jest.fn().mockResolvedValue(Menu);
    const menu = await MenuSchema.find({});
    expect(menu).toBe(Menu);*/

    /*MenuSchema.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([...Menu]));
    MenuSchema.count = jest.fn().mockImplementation(() => Promise.resolve(2));*/

    /*expect(mockResponse.json).toHaveBeenCalledTimes(1)
    expect(mockResponse.json).toHaveBeenCalledWith({ success: true, data: Menu, message: "Menu List." })*/

    //expect(mockResponse.status).toHaveBeenCalledWith(200);
    //expect(mockResponse.status).toHaveBeenCalledTimes(1);
    //expect(mockResponse.status).toHaveBeenCalledWith(200);
    //console.log((mockResponse.json as jest.Mock).mock);
    //expect(mockResponse.json).toEqual(expectedResponse.data);
    //expect((mockResponse.json as jest.Mock).mock).toEqual(expectedResponse.data);

    /*expect(getMenu).toBeCalled();
    res.status.mockResolvedValueOnce(200);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ success: true, data: menu, message: "Menu List." });*/
  });
});
/*describe("return menu with status 200", () => {
  let responseObject = {
    data: [
      {
        _id: "6217dfbc071dd40058ac96f1",
        menuId: 1001,
        menuName: "HOME",
        menuLabel: "Home",
        childMenu: [],
        menuPath: "/",
      },
      {
        _id: "6217e04f071dd40058ac96f2",
        menuId: 1002,
        menuName: "SIGNIN",
        menuLabel: "Sign In",
        childMenu: [],
        menuPath: "/sign-in",
      },
    ],
  };
  let mockRequest: Partial<Request> = {
    body: {},
    headers: {},
    params: {},
  };
  let mockResponse: Partial<Response> = {
    json: jest.fn().mockImplementation((res) => {
      responseObject = res;
    }),
  };

  test.only("returns all menu with status 200", async () => {
    const res = await getMenu(mockRequest as Request, mockResponse as Response);
    expect(res).resolves.toEqual({ data: Menu });
  });
});*/

/*const mockResponse = [
    {
        _id: "6217dfbc071dd40058ac96f1",
        menuId: 1001,
        menuName: "HOME",
        menuLabel: "Home",
        childMenu: [],
        menuPath: "/"
    },
    {
        _id: "6217e04f071dd40058ac96f2",
        menuId: 1002,
        menuName: "SIGNIN",
        menuLabel: "Sign In",
        childMenu: [],
        menuPath: "/sign-in"
    }
];*/

//describe("return menu with status 200", async () => {
/*beforeAll(()=>{
        MenuSchema.find = jest.fn().mockResolvedValue([
            {
                _id: "6217dfbc071dd40058ac96f1",
                menuId: 1001,
                menuName: "HOME",
                menuLabel: "Home",
                childMenu: [],
                menuPath: "/"
            },
            {
                _id: "6217e04f071dd40058ac96f2",
                menuId: 1002,
                menuName: "SIGNIN",
                menuLabel: "Sign In",
                childMenu: [],
                menuPath: "/sign-in"
            }
        ])
    })*/

/*xit("should return navigation menus with status 200", async () => {
        const mockRequest = {
            body: {},
            headers: {},
            params: {}
        };
        const mockResponse = {};
        
        await getMenu(mockRequest as Request, res as Response)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockResponse);
    })*/
//});
